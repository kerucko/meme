from django.shortcuts import render


def FirstPage(request):
    return render(request, 'main/index.html')

def Quantity(request):
    return render(request, 'main/2page.html')

def Point(request):
    return render(request, 'main/3page.html')

