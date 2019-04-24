import graphene
from graphene_django import DjangoObjectType

from .models import Client


class ClientType(DjangoObjectType):
    class Meta:
        model = Client


class Query(graphene.ObjectType):
    Clients = graphene.List(ClientType)

    def resolve_Clients(self, info, **kwargs):
        return Client.objects.all()

#################################################

class CreateLink(graphene.Mutation):
    id = graphene.Int()
    firstName = graphene.String()
    lastName = graphene.String()
    email = graphene.String()

     class Arguments:
        firstName = graphene.String()
        lastName = graphene.String()
        email = graphene.String()

     def mutate(self, info, url, description):
        client = Client(firstName=firstName, lastName=lastName, email=email)
        client.save()

        return CreateClient(
            id=client.id,
            firstName=client.firstName,
            lastName=client.lastName,
            email=client.email,
        )


 class Mutation(graphene.ObjectType):
    create_client = CreateClient.Field()
