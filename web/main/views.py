from django.shortcuts import render
from .models import Marks
from .forms import MarksForm


def FirstPage(request):
    return render(request, 'main/index.html')


def Quantity(request):
    return render(request, 'main/2page.html')


def Point(request):
    return render(request, 'main/3page.html')


def Share(request):
    if request.method == 'POST':
        form = MarksForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            print('ERROR')

    form = MarksForm()

    data = {
        'form': form
    }

    results = Marks.objects.all()
    result = results[1].unique_id
    if request.POST.get('delete'):
        request.session.clear()
        results = 'a'
    return render(request, 'main/4page.html', data)


def LastAwesome(request):
    return render(request, 'main/last_page.html')


def LastGood(request):
    return render(request, 'main/last_page_2.html')


def LastBad(request):
    return render(request, 'main/last_page_3.html')

def Other(request):
    return render(request, 'main/3page.html')
