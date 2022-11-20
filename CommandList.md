# Kubectl

## Deploy from file

kubectl create -f ymal_file_name_with_extension

## Get running pods

kubectl get pods

## Get Services

kubectl get svc

## Get Deployments

kubectl get deployments

## Get ingress 

kubectl get ingress

## Use cluster

kubectl config use-context cluster_nam

## Get clusters

kubectl config get-contexts

# Minikube

## Start minikube

minikube start

## Start minikube with driver

minikube start --driver=virtualbox

type of drivers:

virtualbox, docker, none

## Start minikube with multiple nodes

minikube start --nodes 3

the number of nodes can be set to any val

## Start minikube with more CPU 

start minikube --cpus 4

Default value is 2

## start minikube with more Disk

start minikube --memory 10000

Defult value is 2 Gb

## Start a new cluster

start minikube -p cluster_name

## Install addons

start minikube addons enable 

## Start minikube with different profile

minikube start -p profile_name

## Delete minikube 

minikube delete

## Run dashboard service

minikube dashboard

cannot close the terminal

## Build image into minikube cluster

minikubect -p cluster_name image build -t ta_name .

# Docker

## Building image with Tag

docker build -t name .

