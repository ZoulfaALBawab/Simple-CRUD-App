
  const Clients = () => (
    <Query query={allClients}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data. allClients.map(({ id, firstName, lastName, email }) => {
            let firstName; let lastName;  let email; 
  
          return (
            <Mutation mutation={updateClient} key={id}>
              {updateClient => (
                <div>
                  <p>{ }</p>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      updateClient({ variables: { id, type: input.value } });
  
                      input.value = "";
                    }}
                  >
                    <input
                      ref={node => {
                        input = node;
                      }}
                    />
                    <button type="submit">Update Todo</button>
                  </form>
                </div>
              )}
            </Mutation>
          );
        });
      }}
    </Query>
  );
   