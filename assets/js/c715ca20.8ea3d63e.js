"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[9777],{5628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(4848),i=t(8453);const o={sidebar_label:"Apache Tomcat - Setup",sidebar_position:3},l="Getting Started",s={id:"tutorials/apache tomcat",title:"Getting Started",description:"Our NonStop IT Team",source:"@site/docs/3-tutorials/2-apache tomcat.md",sourceDirName:"3-tutorials",slug:"/tutorials/apache tomcat",permalink:"/docs/tutorials/apache tomcat",draft:!1,unlisted:!1,editUrl:"https://github.com/shaniceabigail/nonstop101/blob/main/docs/3-tutorials/2-apache tomcat.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Apache Tomcat - Setup",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting Up Apache Tomcat",permalink:"/docs/tutorials/apache-tomcat"}},a={},c=[{value:"Our NonStop IT Team",id:"our-nonstop-it-team",level:2},{value:"Functions To Complete",id:"functions-to-complete",level:2},{value:"How to Install Apache Tomcat",id:"how-to-install-apache-tomcat",level:2},{value:"1.0 Creating a directory for this tutorial",id:"10-creating-a-directory-for-this-tutorial",level:3},{value:"1.1 Downloading and Installing Tomcat",id:"11-downloading-and-installing-tomcat",level:3},{value:"Tomcat&#39;s Sub-directories",id:"tomcats-sub-directories",level:4},{value:"1.2 Creating the JAVA_HOME environment variable",id:"12-creating-the-java_home-environment-variable",level:3},{value:"1.3 Configuring the Tomcat Server",id:"13-configuring-the-tomcat-server",level:3},{value:"1.3.1 Setting the TCP Port Number - <code>\\conf\\server.xml</code>",id:"131-setting-the-tcp-port-number---confserverxml",level:4},{value:"1.3.2 Enabling Directory Listing - <code>\\conf\\web.xml</code>",id:"132-enabling-directory-listing---confwebxml",level:4},{value:"1.3.3 Enabling Automatic Reload - <code>\\conf\\context.xml</code>",id:"133-enabling-automatic-reload---confcontextxml",level:4},{value:"1.4 Starting the Tomcat Server",id:"14-starting-the-tomcat-server",level:3},{value:"1.4.1 Starting the Server",id:"141-starting-the-server",level:4},{value:"1.4.2 Starting a Client to access the Server",id:"142-starting-a-client-to-access-the-server",level:4},{value:"1.4.3 Shutting down the Server",id:"143-shutting-down-the-server",level:4},{value:"1.5 Developing and Deploying a &quot;Hello World!&quot; Web App",id:"15-developing-and-deploying-a-hello-world-web-app",level:3},{value:"1.5.1 Creating a directory structure for the application - <code>\\hello</code>",id:"151-creating-a-directory-structure-for-the-application---hello",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.h2,{id:"our-nonstop-it-team",children:"Our NonStop IT Team"}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we will be creating a Java application on Apache Tomcat to help the NonStop IT Team with their Tickets. The application will manage new tickets, and edit existing tickets."}),"\n",(0,r.jsxs)(n.p,{children:["We will need 2 tables for this - ",(0,r.jsx)(n.strong,{children:"User and Ticket"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Ticket"})," table will be located in the ",(0,r.jsx)(n.strong,{children:"SQL/MX"}),", and the ",(0,r.jsx)(n.strong,{children:"User"})," table will be located in the ",(0,r.jsx)(n.strong,{children:"MySQL"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"functions-to-complete",children:"Functions To Complete"}),"\n",(0,r.jsx)(n.p,{children:"At the end of this tutorial, our Java application should be able to"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create new Tickets, if they are an existing user"}),"\n",(0,r.jsx)(n.li,{children:"Update existing Tickets if the tickets exist"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"setting-up-our-development-machine",children:"Setting up our development machine"}),"\n",(0,r.jsx)(n.p,{children:"Before we start coding, we are going to do some prep work for our development machines."}),"\n",(0,r.jsx)(n.p,{children:"Check and make sure that you have the following:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1. SQLMX"})," -  While we're keep on working on the fault-tolerant features of this database, come speak with us for a demo and a good feel of our efforts!"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2. Java"})," - ",(0,r.jsx)(n.a,{href:"https://www.java.com/download/ie_manual.jsp",children:"Download Java for Windows"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"3. MySQL"})," - ",(0,r.jsx)(n.a,{href:"https://dev.mysql.com/downloads/mysql/",children:"Download MySQL for Windows"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4. Apache Tomcat"})," - step-by-step guide down in the next segment."]}),"\n",(0,r.jsx)(n.p,{children:"For this tutorial, we are using MySQL-8.0.30-winx64 package, Java Openjdk version 18.0.1 - development is on a Windows OS."}),"\n",(0,r.jsx)(n.h2,{id:"how-to-install-apache-tomcat",children:"How to Install Apache Tomcat"}),"\n",(0,r.jsx)(n.h3,{id:"10-creating-a-directory-for-this-tutorial",children:"1.0 Creating a directory for this tutorial"}),"\n",(0,r.jsx)(n.p,{children:"Create a directory and name it as ItTicketing to store and keep track of the project files."}),"\n",(0,r.jsx)(n.h3,{id:"11-downloading-and-installing-tomcat",children:"1.1 Downloading and Installing Tomcat"}),"\n",(0,r.jsx)(n.p,{children:"For Windows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://tomcat.apache.org/",children:"Tomcat Downloads"}),' and search for "Downloads" under Tomcat 10.x Released segment.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Scroll down to the Source Code Distributions segment download the zip file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unzip and extract the downloaded file into the ItTicketing project directory."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Rename the extracted folder to \\tomcat. i.e ",(0,r.jsx)(n.code,{children:"C:\\ItTicketing\\tomcat"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"tomcats-sub-directories",children:"Tomcat's Sub-directories"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"bin"})," - contains binaries and scripts to startup and shutdown the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"conf"})," - contains the system-wide configuration files such as server.xml, web.xml and content.xml."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"webapps"})," - contains the webapps to be deployed. You can place WAR files for deployment in this folder."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"lib"})," - contains Tomcat's system-wide library JAR files, accessible by all webapps. All other JAR files such as JDBC drivers will be placed here."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"logs"})," - contains Tomcat's log files with error messages as generated."]}),"\n",(0,r.jsx)(n.li,{children:"** work** - Tomcat's working directory used by JSP for JSP-to-Servlet conversion."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"12-creating-the-java_home-environment-variable",children:"1.2 Creating the JAVA_HOME environment variable"}),"\n",(0,r.jsx)(n.p,{children:"For Windows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Search for "Edit System Variables" on your machine.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Create an environment variable called "JAVA_HOME" and set it to the JDK installed directory.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"13-configuring-the-tomcat-server",children:"1.3 Configuring the Tomcat Server"}),"\n",(0,r.jsxs)(n.p,{children:['The Tomcat configuration files in XML format are located in teh "conf" sub-directory of the Tomcat installed directory. i.e ',(0,r.jsx)(n.code,{children:"server.xml, web.xml, content.xml"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create a backup copy of the configuration files"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"131-setting-the-tcp-port-number---confserverxml",children:["1.3.1 Setting the TCP Port Number - ",(0,r.jsx)(n.code,{children:"\\conf\\server.xml"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"\\conf\\server.xml"})," file using a text editor (such as VSCode, Sublime Text or Atom)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['Change the port variable in the "Connector" to be ',(0,r.jsx)(n.strong,{children:'"port="2020""'}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'A "Connector" represents an endpoint by which requests are received and responses are returned.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    <Connector port="2020" protocol="HTTP/1.1"\r\n               connectionTimeout="20000"\r\n               redirectPort="8443" />\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"132-enabling-directory-listing---confwebxml",children:["1.3.2 Enabling Directory Listing - ",(0,r.jsx)(n.code,{children:"\\conf\\web.xml"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"\\conf\\web.xml"})," file using a text editor."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Change the ",(0,r.jsx)(n.strong,{children:"param-value to false"})," to enable directory listing."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"       ...\r\n        <init-param>\r\n            <param-name>listings</param-name>\r\n            <param-value>false</param-value>\r\n        </init-param>\r\n        <load-on-startup>1</load-on-startup>\r\n    </servlet>\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"133-enabling-automatic-reload---confcontextxml",children:["1.3.3 Enabling Automatic Reload - ",(0,r.jsx)(n.code,{children:"\\conf\\context.xml"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"\\conf\\context.xml"})," file using a text editor."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.strong,{children:'reloadable="true"'}),", ",(0,r.jsx)(n.strong,{children:'crossContext="true"'}),", and ",(0,r.jsx)(n.strong,{children:'parallelAnnotationScanning="true"'})," into the ",(0,r.jsx)(n.em,{children:"Context"})," attribute."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    <Context reloadable="true" crossContext="true" parallelAnnotationScanning="true">\n'})}),"\n",(0,r.jsx)(n.h3,{id:"14-starting-the-tomcat-server",children:"1.4 Starting the Tomcat Server"}),"\n",(0,r.jsx)(n.h4,{id:"141-starting-the-server",children:"1.4.1 Starting the Server"}),"\n",(0,r.jsx)(n.p,{children:"For Windows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Launch a Command Shell console and navigate into the Tomcat folder's ",(0,r.jsx)(n.code,{children:"bin"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:">   _cd C:\\ItTicketing\\tomcat\\bin_\r\n>    \r\n>   _startup_ \n"})}),"\n",(0,r.jsx)(n.h4,{id:"142-starting-a-client-to-access-the-server",children:"1.4.2 Starting a Client to access the Server"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start a browser and connect using the link - ",(0,r.jsx)(n.a,{href:"http://localhost:2020",children:"http://localhost:2020"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The Tomcat server's welcome page should appear."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To view other servlet examples, try navigating to ",(0,r.jsx)(n.a,{href:"http://localhost:2020/examples",children:"http://localhost:2020/examples"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"143-shutting-down-the-server",children:"1.4.3 Shutting down the Server"}),"\n",(0,r.jsx)(n.p,{children:"For Windows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Press Ctrl+C on the Tomcat console ",(0,r.jsx)(n.strong,{children:"OR"})]}),"\n",(0,r.jsxs)(n.li,{children:["Open another Command Shell console and run the ",(0,r.jsx)(n.code,{children:"shutdown.bat"})," script."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:">   _cd C:\\ItTicketing\\tomcat\\bin_\r\n>    \r\n>   _shutdown_\n"})}),"\n",(0,r.jsx)(n.h3,{id:"15-developing-and-deploying-a-hello-world-web-app",children:'1.5 Developing and Deploying a "Hello World!" Web App'}),"\n",(0,r.jsxs)(n.h4,{id:"151-creating-a-directory-structure-for-the-application---hello",children:["1.5.1 Creating a directory structure for the application - ",(0,r.jsx)(n.code,{children:"\\hello"})]}),"\n",(0,r.jsx)(n.p,{children:"Let's create our first Hello World webapp with Tomcat."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a new folder ",(0,r.jsx)(n.code,{children:"hello"})," in the ",(0,r.jsx)(n.code,{children:"webapps"})," directory, a ",(0,r.jsx)(n.code,{children:"WEB-INF"})," in the ",(0,r.jsx)(n.code,{children:"hello"})," folder, and a ",(0,r.jsx)(n.code,{children:"classes"})," folder in ",(0,r.jsx)(n.code,{children:"WEB-INF"})," -> ",(0,r.jsx)(n.code,{children:"\\tomcat\\webapps\\hello"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:">   _cd C:\\ItTicketing\\tomcat\\webapps_\r\n>\r\n>  _mkdir hello_\r\n>\r\n>  _cd C:\\ItTicketing\\tomcat\\webapps\\hello_\r\n>\r\n>  _mkdir WEB-INF_\r\n>\r\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);