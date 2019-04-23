import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from backend.client.models import Client

# Create a GraphQL type for the Client model
class ClientType(DjangoObjectType):
    class Meta:
        model = Client

# Create a Query type
class Query(ObjectType):  
    firstName = graphene.Field(ClientType, id=graphene.Int())
    lastName = graphene.List(ClientType)
    email = graphene.List(ClientType)
 
    def resolve_client(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Client.objects.get(pk=id)

        return None

def resolve_actors(self, info, **kwargs):
        return Client.objects.all()

# Create Input Object Types
class ClientInput(graphene.InputObjectType):  
    id = graphene.ID()
    firstName = graphene.String()
    lastName = graphene.String()
    email = graphene.String()

 
 