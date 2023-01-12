from django.shortcuts import render
from .models import Marks


def FirstPage(request):
    return render(request, 'main/index.html')


def Quantity(request):
    return render(request, 'main/2page.html')


def Point(request):
    return render(request, 'main/3page.html')


def Share(request):
    results = Marks.objects.all()
    result = results[0].unique_id
    print(result)
    return render(request, 'main/4page.html', {"result": result})


def LastAwesome(request):
    return render(request, 'main/last_page.html')


def LastGood(request):
    return render(request, 'main/last_page_2.html')


def LastBad(request):
    return render(request, 'main/last_page_3.html')
