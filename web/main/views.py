from django.shortcuts import render



def FirstPage(request):
    return render(request, 'main/index.html')

def Quantity(request):
    return render(request, 'main/2page.html')

def Point(request):
    return render(request, 'main/3page.html')

def Share(request):
    return render(request, 'main/4page.html')

def LastAwesome(request):
    return render(request, 'main/last_page.html')

def LastGood(request):
    return render(request, 'main/last_page_2.html')

def LastBad(request):
    return render(request, 'main/last_page_3.html')

