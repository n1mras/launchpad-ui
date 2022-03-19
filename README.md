# Launchpad UI

A React Web UI for use with the [launchpad backend](https://github.com/n1mras/launchpad) application

#About
    Launchpad is a small hobby project (primarily written for fun) for remotely launching media* content on a host computer
    from a local home network. Do not expose on the internet, no effort has been put into security for such use.
    
    * initially just video support.
# Install:
 ## Docker
    Use the makefile to build and run a docker image of this app (see make help).
    By default the docker app expects the launchpad backend service on port 8000, see docker/site.conf to change this.  
 
## Development
### `npm start`
    
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    
    The page will reload if you make edits.\
    You will also see any lint errors in the console.

### `npm run build`
    
    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.
    
    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!