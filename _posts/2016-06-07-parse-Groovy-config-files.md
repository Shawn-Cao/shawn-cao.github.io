---
layout:     post
title:      Parse Groovy Config Files with Groovy Shell and ConfigSlurper
date:       2016-06-07
summary:    Use groovysh to interact with groovy, and parse groovy files using ConfigSlurper().parse.
categories: software
---

### Extract config properties from a Groovy project:

I just worked on a subsidary project which has dependency on a parent Groovy project. The requirements includes parsing groovy variables out. Groovy has a slightly different (but powerful) syntax for it's configration files, so I have to find one or write my own parser to git the information out.

Figured out Groovy has a command line utility which can be used in bash like [shell](http://groovy-lang.org/groovysh.html)

To use it, just create a file and run it with
  groovysh <filename> --quiet

Remember to ':exit' to return execution if calling the script in a parent thread. I'm naming those scripts to *.groovysh to clarification and run them with --quiet mode whenever that's being use by a parent script.

Sample .groovysh file:

```
println 'Parsing QVXP ServiceConfig.groovy'

servicesConfig = new ConfigSlurper().parse(ServicesConfig)
file = new File('WSDLsUrl.csv')
file.delete()
servicesConfig.cxf.client.each ({ key, value ->
  if (value && value.wsdl) {
    file << value.wsdl;
    file << ','
  }
})

println 'Saved WSDL list to file WSDLsUrl.csv'
:exit
```
