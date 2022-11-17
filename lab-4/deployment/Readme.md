https://thorstenalpers.github.io/Docs/how-to-expose-kubernetes-ports.html



# Error with ingress

    #- host: rabbit.chat-test.com # amqp is not supported by ingress
    #  http:
    #    paths:
    #      - path: /
    #        pathType: Prefix
    #        backend:
    #          service:
    #            name: chat-broker
    #            port: 
    #              number: 5672