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

    return render(request, 'main/4page.html', data)


def LastAwesome(request):
    return render(request, 'main/last_page.html')


def LastGood(request):
    return render(request, 'main/last_page_2.html')


def LastBad(request):
    return render(request, 'main/last_page_3.html')

def Other(request):
    mode = request.GET.get('mode')
    memes = ''
    marks = ''

    results = Marks.objects.all()
    for element in results:
        if element.unique_id == mode:
            memes = element.memes
            marks = element.marks
    memes = memes[1:]
    marks = marks[1:]
    length = len(memes.split('_'))

    data = {
        'length': length,
        'memes': memes,
        'marks': marks
    }

    return render(request, 'main/3pageforfriends.html', data)
