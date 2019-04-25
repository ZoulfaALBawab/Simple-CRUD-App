import graphene
import client.schema 


class Query(client.schema.Query, graphene.ObjectType):
    pass

class Mutation(client.schema.Mutation, graphene.ObjectType):  
     
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)  
 