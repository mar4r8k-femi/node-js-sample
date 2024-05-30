# .gitpod.Dockerfile
FROM gitpod/workspace-python-3.10

# Install Node.js and npm
RUN sudo apt-get update
RUN sudo apt-get install -y nodejs
RUN sudo apt-get install -y npm
