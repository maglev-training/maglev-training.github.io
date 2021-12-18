---
sidebar_position: 6
---

# Kubernetes

This document serves as a general overview of our application orchestration platform, Kubernetes. 

Since our guiding policies require us to lean into "cloud native" [As discussed here](/#the-stack), this document will start with an overview of Kubernetes architecture aside from any specific distribution or cloud hosting provider. Then it will discuss the specifics of how we are currently using Kubernetes with this application, and then, finally, how contributors can create a local development version of our infrastructure for testing, etc. 

## Kubernetes Architecture

The most important thing to understand is that Kubernetes is a tool for creating a computer *cluster*. A cluster is a bunch of computers that you treat as a single computer. Of course, most Kubernetes clusters are made out of a *lot* of computers (called **nodes**), and *somebody* has to be responsible for them - security, configuration, all that stuff. But from the point of view of a developer, with a cluster, specifically Kubernetes, you have an API. You send *stuff* to that API, and you don't worry so much about how the whole thing is configured. Unless you want to. And if you do, that is cool and very valuable. We are going to emphasis the *abstractions* that are provided by Kubernetes for developers. 

### The General Kuberentes *Vibe*

I want to give you a sense of how you, as a developer, might think about Kubernetes. 

When we write software on our local machine, we rely on the operating system to provide some functionality for us. And the less we have to think about how that functionality is provided and implemented, the more we are able to stay focused on the work we are trying to accomplish. If we need to open a file on the hard drive, there are APIs available for that, and we just *use* them. If we want to open a network connection, we just do it. All that sort of *ambient* stuff that is available to us as developers that is just a given.

In distributed applications, which are applications that are spread across multiple physical machines, across networks, etc. it becomes much more complicated. Especially in an orchestrated environment, where the software we are writing might be actually running in multiple *replicas* simultaneously for scalability and fault-tolerance. Our applications will depend on other applications running in our cluster, and Kubernetes will move those suckers around on us, like a shell game. Those services (and ours!) will be upgraded, downgraded, rescheduled, scaled, etc.

Now all that stuff will be explored later, but the point is, we sort of need a new operating system that takes all that kind of stuff into account, handles it for us, and lets us focus on what we are supposed to be doing. You know, the whole 'delivering value for the customers' thing.

That is a really good metaphor, I think.

> Kubernetes is an operating system for distributed applications to run on.

Now, when we are working on our local machines, our operating system has a set of things that it can provide (file system, memory management, networking, etc.), and then we also need *other* things. We might need a database, and most operating systems don't ship with a database that is a good choice for developers to use. So, we might pick one, like [MongoDb](https://mongodb.com), or Sql Server, or whatever, and download it, install it, configure it, etc.

Kubernetes will take care of that kind of thing for you. You just sort of tell it what you need (this is called the **desired state**), in a pretty clear way, and it will do its darndest to get it all together for you. And unlike most operating systems, it'll keep it's eye on it after it is created and make sure it's all working great, and if it isn't, it'll fix it. 

An installed Kubernetes cluster is really a set of promises of things that can be provided to software running on that cluster. Some of those things are "batteries included", they just are there and ready to go. Others have to be provided by the people that install and configure your cluster. For example, one of the things a Kubernetes cluster will provide for your applications is a way for software running *outside* of the cluster to make a network connection to software running *inside* the cluster. You "tell" the cluster, through your desired state configuration, that "Hey, this little web server I asked you to run for me? Make it so that people can connect to it from the outside world by going to https://maglev.training. That feature in Kubernetes is called **Ingress**. And there isn't one included "in the box", so to speak. So, if you are going to create a cluster, you have to decide, amongst many options, how you are going to fulfill that promise when a developer asks for it.

Then there are things that you, as an application developer can ask for, but you might need some "higher level" configuration to provide it. An obvious and common example is just some disk space that you can write to or read from. In your configuration you'll just ask for (claim) some disk space, but some cluster administrator is going to have to decide where those bits are actually going to be written. (see "persistent volumes" and "persistent volume claims" below.)

### Key Kubernetes Abstractions

#### Cluster

A Kubernetes cluster is at least one machine with the Kubernetes software installed and running on it. 

#### Nodes


> Nodes are machines that run Kubernetes and workloads assigned to the cluster. A kubernetes cluster is made up of nodes.

A node is a machine (real or "virtual") that is part of the cluster. Each cluster must have at least one node, but usually has many. Some of the nodes are assigned jobs and duties related to cluster management. We call these "master" nodes. Other nodes are added to just run our applications. These are called "worker" nodes. Running a cluster is a big job, so in production you'll rarely have just one node. Nodes can be dynamically added (or removed) from the cluster while it's running. It's even possible to have nodes on your cluster running "on prem", and then patch some more into it that are running on some cloud provider somewhere.

#### Namespaces

#### Pods

#### Storage

#### Networking



## Our Cloud Hosting Environment for Kubernetes

### AKS

## Creating a Local Development Cluster

### Minikube

### K3S

### Other Options