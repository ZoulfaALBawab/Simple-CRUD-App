import graphene
import backend.client.schema 


class Query(backend.client.schema.Query, graphene.ObjectType):
        # This class extends all abstract apps level Queries and graphene.ObjectType
        pass

schema = graphene.Schema(query=Query)
