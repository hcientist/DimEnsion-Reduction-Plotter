from django.shortcuts import render
from django.utils import simplejson as json
from md_plotter.dimension_flattener import DimensionFlattener
import os
import logging
import re
from django import http

# from md_plotter import JSONResponseMixin

# class MyCustomUserView():
#   pass

# class JSONDetailView(JSONResponseMixin, MyCustomUserView):
#   def convert_context_to_json(self, context):
#     # context['objects'] = User.objects.values('first_name','last_name','is_active')
#     return json.dumps(context)


def index(request, path=''):
  return render(request, 'index.html')

def plotter(request):
  logger = logging.getLogger('django')
  logger.debug('\n\n\n\n\n\n hey there \n\n\n\n')
  ranking = range(27)
  if len(request.path) > 9:
    compiled_pattern = re.compile('\d+')
    ranking = re.findall(compiled_pattern, request.path[9:])
    ranking = [int(elem) for elem in ranking]

  logger.debug(ranking)
  flattener = DimensionFlattener(os.path.join(os.path.dirname(__file__),'normalized-class-data.csv'))
  results2D = flattener.calculate2DAndDist(10, ranking)
  resultsPolar = flattener.calculatePolarAndDist(10, ranking)
  results = {'2D':results2D, 'polar':resultsPolar}
  logger.debug(results)
  logger.debug('\n\n\n\n\n\n hey there \n\n\n\n')

  # logger.debug('\n\n\n\n\n\n %s \n\n\n\n' % (request.path))
  # logger.debug('\n\n\n\n\n\n %s \n\n\n\n' % (ranking))
  return http.HttpResponse(json.dumps(results), content_type='application/json')
  # return render(request, 'plotter/plotter.html')