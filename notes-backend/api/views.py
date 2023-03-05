from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
# Create your views here.

@api_view(['GET'])
def endpoints(request):
    urls = [
        'http://127.0.0.1:8000/api/note/endpoints',
        'http://127.0.0.1:8000/api/note/',
        'http://127.0.0.1:8000/api/note/<int:pk>',
        'http://127.0.0.1:8000/api/note/add/',
        'http://127.0.0.1:8000/api/note/update/<int:pk>',
        'http://127.0.0.1:8000/api/note/delete<int:pk>'
    ]
    return Response(urls)

@api_view(['GET'])
def get_notes(request):
    note_objects = Note.objects.all()
    serializer = NoteSerializer(note_objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_note(request, pk):
    note_objects = Note.objects.get(pk = pk)
    serializer = NoteSerializer(note_objects, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def add_note(request):
    serializer = NoteSerializer(data= request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response('Invalid Data')


@api_view(['PUT'])
def update_note(request, pk):
    note_object = Note.objects.get(pk = pk)
    serializer = NoteSerializer(note_object, data= request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response('Invalid Data')

@api_view(['DELETE'])
def delete_note(request, pk):
    note_object = Note.objects.get(pk = pk)
    note_object.delete()
    return Response('Data has been deleted')