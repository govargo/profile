/** Frontend */
var html5      = { "title": "HTML5",            "experiment": "4年",    "proficiency": "○"      }
var css3       = { "title": "CSS3",             "experiment": "4年",    "proficiency": "○"      }
var javascript = { "title": "JavaScript",       "experiment": "4年",    "proficiency": "○"      }
var jquery     = { "title": "jQuery",           "experiment": "4年",    "proficiency": "○"      }
var node       = { "title": "Node.js",          "experiment": "1年未満", "proficiency": "勉強中"  }
var vue        = { "title": "vue.js",           "experiment": "1年未満", "proficiency": "勉強中"  }

var frontend = [html5, css3, javascript, jquery, node, vue]

/** Backend */
var java       = { "title": "Java",             "experiment": "4年",     "proficiency": "◎"     }
var groovy     = { "title": "Groovy",           "experiment": "3年",     "proficiency": "○"     }
var python     = { "title": "Python",           "experiment": "1年",     "proficiency": "△"     }
var go         = { "title": "Go",               "experiment": "1年未満",  "proficiency": "勉強中" }
var bash       = { "title": "Bash",             "experiment": "1年",     "proficiency": "○"     }
var sql        = { "title": "SQL",              "experiment": "4年",     "proficiency": "○"     }
var struts     = { "title": "Struts",           "experiment": "1年",     "proficiency": "△"     }
var spring     = { "title": "Spring",           "experiment": "3年",     "proficiency": "○"     }

var backend = [java, groovy, python, go, bash, sql, struts, spring]

/** DB・Server */
var oracle       = { "title": "Oracle",         "experiment": "4年",     "proficiency": "○"     }
var mysql        = { "title": "MySQL",          "experiment": "4年",     "proficiency": "○"     }
var postgresql   = { "title": "PostgreSQL",     "experiment": "1年未満",  "proficiency": "△"     }
var nosql        = { "title": "NoSQL",          "experiment": "1年未満",  "proficiency": "×"     }
var apache       = { "title": "Apache",         "experiment": "1年",     "proficiency": "△"     }
var nginx        = { "title": "Nginx",          "experiment": "1年",     "proficiency": "○"     }
var tomcat       = { "title": "Tomcat",         "experiment": "4年",     "proficiency": "○"     }
var jboss        = { "title": "JBoss",          "experiment": "2年",     "proficiency": "○"     }
var wildfly      = { "title": "Wildfly",        "experiment": "2年",     "proficiency": "○"     }

var server = [oracle, mysql, postgresql, nosql, apache, nginx, tomcat, jboss, wildfly]

/** Infrastructure・Middleware */
var linux        = { "title": "LinuxOS",        "experiment": "2年",     "proficiency": "○"     }
var ansible      = { "title": "Ansible",        "experiment": "1年",     "proficiency": "○"     }
var docker       = { "title": "Docker",         "experiment": "1年",     "proficiency": "◎"     }
var kubernetes   = { "title": "Kubernetes",     "experiment": "1年",     "proficiency": "◎"     }
var rancher      = { "title": "Rancher",        "experiment": "1年",     "proficiency": "○"     }
var aws          = { "title": "AWS",            "experiment": "1年未満",  "proficiency": "勉強中" }
var gcp          = { "title": "GCP",            "experiment": "1年未満",  "proficiency": "勉強中" }
var alibabacloud = { "title": "AlibabaCloud",   "experiment": "1年未満",  "proficiency": "○"     }

var infra = [linux, ansible, docker, kubernetes, rancher, aws, gcp, alibabacloud]

/** Other */
var readmine     = { "title": "Readmine",        "experiment": "3年",     "proficiency": "○"    }
var svn          = { "title": "SVN",             "experiment": "1年",     "proficiency": "○"    }
var git          = { "title": "Git",             "experiment": "3年",     "proficiency": "○"    }
var gitlab       = { "title": "GitLab",          "experiment": "1年",     "proficiency": "○"    }
var jenkins      = { "title": "Jenkins",         "experiment": "3年",     "proficiency": "◎"    }
var sonarqube    = { "title": "SonarQube",       "experiment": "2年",     "proficiency": "○"    }
var selenium     = { "title": "Selenium",        "experiment": "3年",     "proficiency": "○"    }
var seleniumGrid = { "title": "SeleniumGrid",    "experiment": "1年",     "proficiency": "○"    }
var zalenium     = { "title": "Zalenium",        "experiment": "1年",     "proficiency": "○"    }
var geb          = { "title": "Geb/Spock",       "experiment": "1年",     "proficiency": "○"    }
var fluent       = { "title": "Fluent",          "experiment": "1年",     "proficiency": "○"    }
var elasticsearch= { "title": "ElasticSearch",   "experiment": "1年",     "proficiency": "△"    }
var kibana       = { "title": "Kibana",          "experiment": "1年",     "proficiency": "△"    }
var prometheus   = { "title": "Prometheus",      "experiment": "1年",     "proficiency": "○"    }
var grafana      = { "title": "Grafana",         "experiment": "1年",     "proficiency": "○"    }
var weavescope   = { "title": "WeaveScope",      "experiment": "1年",     "proficiency": "○"    }
var zipkin       = { "title": "Zipkin",          "experiment": "1年",     "proficiency": "△"    }
var helm         = { "title": "Helm",            "experiment": "1年",     "proficiency": "○"    }
var nifi         = { "title": "Apache/NiFi",     "experiment": "1年",     "proficiency": "△"    }
var pipeline     = { "title": "CI Pipeline",     "experiment": "1年",     "proficiency": "○"    }
var gas          = { "title": "GoogleAppScript", "experiment": "2年",     "proficiency": "○"    }
var swagger      = { "title": "Swagger",         "experiment": "1年",     "proficiency": "△"    }
var ga           = { "title": "GoogleAnalytics", "experiment": "1年",     "proficiency": "○"    }
var junit        = { "title": "JUnit",           "experiment": "1年",     "proficiency": "○"    }
var mybatis      = { "title": "MyBatis",         "experiment": "2年",     "proficiency": "○"    }
var wiremock     = { "title": "WireMock",        "experiment": "1年",     "proficiency": "△"    }

var other = [readmine, svn, git, gitlab, jenkins, sonarqube, selenium, seleniumGrid, zalenium,
             geb, fluent, elasticsearch, kibana, prometheus, grafana, weavescope, zipkin, helm,
             nifi, pipeline, gas, swagger, ga, junit, mybatis, wiremock]

/** Certification */
var acounting    = { "title": "日本商工会議所簿記検定2級",                       "date": "2011年03月" }
var fe           = { "title": "基本情報処理技術者(FE)",                         "date": "2015年05月" }
var toeic        = { "title": "TOEIC(IP) 710",                               "date": "2015年11月" }
var ap           = { "title": "応用情報処理技術者(AP)",                         "date": "2015年11月" }
var java         = { "title": "Oracle Certified Java Programmer, Gold SE 7", "date": "2017年04月" }
var oracle       = { "title": "ORACLE MASTER Bronze Oracle Database 12c",    "date": "2018年03月" }
var lpic1        = { "title": "LPIC Level1",                                 "date": "2018年11月" }

var certification = [acounting, fe, toeic, ap, java, oracle, lpic1]