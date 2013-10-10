import sys
import csv
import math

class DimensionFlattener:

  def __init__(self, filename):
    self.names = []
    self.prepareData(filename)

  def prepareData(self, filename):
    self.questions = {}
    self.results = []

    with open(filename, 'rU') as csvfile:
      reader = csv.reader(csvfile, delimiter=',', quotechar='"')

      for i, row in list(enumerate(reader)):
        if i == 0:
          for idx, question in list(enumerate(row)):
            self.questions[idx] = question

        else:
          self.names.append(row[0])
          self.results.append([float(elem) for elem in row[1:]])

    # return questions, results

  def distance(self, a,b):
    return math.sqrt(pow(a['x']-b['x'],2)+pow(a['y']-b['y'],2))

  def calculate2DAndDist(self, scale, ranks):
    simTable = [['']]
    simTable[0].extend(self.names[:])
    pts = self.calculate2D(scale, ranks)
    for i in range(len(pts)):
      simTable.append([self.names[i]])
      for j in range(len(pts)):
        if i == j:
          simTable[i+1].append(0)
        else:
          simTable[i+1].append(self.distance(pts[i], pts[j]))
    return {'table':simTable,'pts':pts}


  def calculate2D(self, scale, ranks):
    # get half the stuff
    multipliers = []
    for i in range(len(ranks)+1%2):
      multipliers.insert(0,pow(scale,i))

    flattened = []
    for personResults in self.results: # each personResults should be a row of results for each person
      x = float(0)
      y = float(0)
      for questionId in range(0,len(ranks),2): # this is counting through the ranked questionIds 
        # print personResults[questionId], multipliers[questionId/2]
        print questionId, ranks
        x += float(personResults[ranks[questionId]])/10.0*float(multipliers[questionId/2])/1e25
        if questionId+1 >= len(personResults):
          continue
        y += personResults[ranks[questionId]+1]/10.0*multipliers[questionId/2]/1e25

      flattened.append({'x':x,'y':y})
    return flattened

  def calculatePolarAndDist(self, scale, ranks):
    simTable = [['']]
    simTable[0].extend(self.names[:])
    pts = self.calculatePolar(scale, ranks)
    for i in range(len(pts)):
      simTable.append([self.names[i]])
      for j in range(len(pts)):
        if i == j:
          simTable[i+1].append(0)
        else:
          simTable[i+1].append(self.distance(pts[i], pts[j]))
    return {'table':simTable,'pts':pts}
    return {'table':simTable,'pts':pts}

  def calculatePolar(self, scale, ranks):
    multipliers = []
    for i in range(len(ranks)+1%2):
      multipliers.insert(0,pow(scale,i))
    # things out of 100, used for theta, should be out of 360.
    flattened = []
    for personResults in self.results: # each personResults should be a row of results for each person
      r = float(0)
      theta = float(0)
      for questionId in range(0,len(ranks),2): # this is counting through the ranked questionIds 
        # print personResults[questionId], multipliers[questionId/2]
        r += float(personResults[ranks[questionId]])/10.0*float(multipliers[questionId/2])/1e25
        if questionId+1 >= len(personResults):
          continue
        theta += personResults[ranks[questionId]+1]/10.0*multipliers[questionId/2]*3.6/1e25

      x=r*math.cos(math.radians(theta))
      y=r*math.sin(math.radians(theta))
      flattened.append({'x':x,'y':y})
    return flattened

if __name__ == "__main__":
  if len(sys.argv)>1:
    f = DimensionFlattener(sys.argv[1])
    # q, r = prepareData(sys.argv[1])
    # rankssss = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,1,2,3,4]
    rankssss = range(27)
    flattenedResults = f.calculate2D(10, rankssss)
    table = f.calculate2DAndDist(10, rankssss)
    print len(flattenedResults), flattenedResults, table