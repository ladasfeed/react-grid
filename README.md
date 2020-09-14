# react-grid
Usage
Copy Grid folder to your UI folder;
1. Go to App.tsx and write:

        ...
        const media = useMediaGrid();
        ...
        return (
          <GridMediaContext.Provider value={media}>
          ... your jsx
          </GridMediaContext.Provider>
        )
    
2. Configure grid parameters. Go to style.css in Grid folder - configure columns, gap and padding in Grid class and on neccesary mediaQueries.
3. Go to useMediaGrid and repeat configuration. 
4. If you want you can also configure gridTemplates if your project has repeating grid parameters for nodes.

5. Example of usage:

        <Grid className='StartSection'>
            <GridItem className='StartSection__content' parameters={{
                        col: {desktop: '5/-5', tablet: '3/-3', mobile: '1/-1'}
            }}>
              ... your jsx
            </GridItem>
        </Grid>
