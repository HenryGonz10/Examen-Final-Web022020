from config.wsgi import *
from crud.erp.models import *
import random

data = ['Gaming','Deporte','Niñ@s','Seguridad','Audio']

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
           's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for i in data:
    Category(name=i).save()
    print('Guardado registro {}'.format(i))
