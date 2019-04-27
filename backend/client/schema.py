import graphene
from graphene_django import DjangoObjectType

from .models import Client


class ClientType(DjangoObjectType):
    class Meta:
        model = Client


class Query(graphene.ObjectType):
    Clients = graphene.List(ClientType)

    def resolve_clients(self, info, **kwargs):
        return Client.objects.all()

 # For creating mutations ::


class ClientInput(graphene.InputObjectType):
    id = graphene.ID()
    firstName = graphene.String()
    lastName = graphene.String()
    email = graphene.String()

# Create Clients


class CreateClient(graphene.Mutation):
    class Arguments:
        input = ClientInput(required=True)

    ok = graphene.Boolean()
    client = graphene.Field(ClientType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        client_instance = Client(name=input.name)
        client_instance.save()
        return CreateClient(ok=ok, client=client_instance)

# iam not sure why we use it ?!
# createClient(input: ClientInput): ClientPayload

 

# UpdateClient:


class UpdateClient(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = ClientInput(required=True)

    ok = graphene.Boolean()
    client = graphene.Field(ClientType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        client_instance = Client.objects.get(pk=id)
        if client_instance:
            ok = True
            client_instance.firstName = input.firstName
            client_instance.lastName = input.lastName
            client_instance.email = input.email
            client_instance.save()
            return UpdateClient(ok=ok, client=client_instance)
        return UpdateClient(ok=ok, client=None)

 
# DeleteClient ::


class DeleteClient(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.ID()

    @classmethod
    def mutate(cls, root, info, **args):
        obj = Client.objects.get(args[("id")])
        obj.delete()
        return cls(ok=True)
 


class Mutation(graphene.ObjectType):
    create_client = CreateClient.Field()
    update_client = UpdateClient.Field()
    delete_client = DeleteClient.Field()

 

schema = graphene.Schema(query=Query, mutation=Mutation)
