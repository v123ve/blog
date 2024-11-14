import{_ as e,c as a,a3 as n,o as l}from"./chunks/framework.BaR4VHXY.js";const x=JSON.parse('{"title":"springmvc的配置：","description":"","frontmatter":{"Created at":"2019-03-25T00:00:00.000Z","Last updated at":"2019-04-02T00:00:00.000Z","tags":["ssm整合","xml"]},"headers":[],"relativePath":"zh-CN/学习笔记/springmvc的配置：.md","filePath":"zh-CN/学习笔记/springmvc的配置：.md","lastUpdated":null}'),r={name:"zh-CN/学习笔记/springmvc的配置：.md"};function o(i,t,s,p,c,m){return l(),a("div",null,t[0]||(t[0]=[n(`<h1 id="springmvc的配置" tabindex="-1">springmvc的配置： <a class="header-anchor" href="#springmvc的配置" aria-label="Permalink to &quot;springmvc的配置：&quot;">​</a></h1><h2 id="springmvc的配置-1" tabindex="-1">springmvc的配置： <a class="header-anchor" href="#springmvc的配置-1" aria-label="Permalink to &quot;springmvc的配置：&quot;">​</a></h2><h4 id="springmvc" tabindex="-1">springmvc： <a class="header-anchor" href="#springmvc" aria-label="Permalink to &quot;springmvc：&quot;">​</a></h4><ul><li><p>修改web.xml spring容器的配置applicationContext.xml</p></li><li><p>修改springmvc的xxx-servlet.xml</p></li><li><p>测试</p></li></ul><h4 id="applicationcontext-xml" tabindex="-1">applicationContext.xml： <a class="header-anchor" href="#applicationcontext-xml" aria-label="Permalink to &quot;applicationContext.xml：&quot;">​</a></h4><pre><code>    &lt;!-- annotation注解 不能写controller，因为controller需要springmvc来扫描--&gt;
    &lt;context:component-scan base-package=&quot;com.aaa.entity,com.aaa.config,com.aaa.service&quot;&gt;&lt;/context:component-scan&gt;
</code></pre><h4 id="xxx-servlet-xml" tabindex="-1">xxx-servlet.xml <a class="header-anchor" href="#xxx-servlet-xml" aria-label="Permalink to &quot;xxx-servlet.xml&quot;">​</a></h4><pre><code>    &lt;context:component-scan base-package=&quot;com.aaa.controller&quot;&gt;            &lt;/context:component-scan&gt;
    &lt;mvc:annotation-driven&gt;&lt;/mvc:annotation-driven&gt;
    &lt;!-- 配置springmvc的视图解析器 --&gt;
    &lt;bean &gt;
     &lt;property name=&quot;prefix&quot; value=&quot;/WEB-INF/jsp/&quot;&gt;&lt;/property&gt;
     &lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
</code></pre><h4 id="web-xml" tabindex="-1">web.xml <a class="header-anchor" href="#web-xml" aria-label="Permalink to &quot;web.xml&quot;">​</a></h4><pre><code>    &lt;!-- spring容器需要加载的配置文件 --&gt;
    &lt;context-param&gt;
    &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
    &lt;param-value&gt;classpath:applicationContext.xml&lt;/param-value&gt;
  &lt;/context-param&gt;
  &lt;listener&gt;
    &lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;
  &lt;/listener&gt;
 &lt;!-- 配置前端控制器 --&gt;
 &lt;servlet&gt;
    &lt;servlet-name&gt;xxx&lt;/servlet-name&gt;
    &lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
    &lt;init-param&gt;
        &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
    &lt;param-value&gt;classpath:xxx-servlet.xml&lt;/param-value&gt;
    &lt;/init-param&gt;
 &lt;/servlet&gt;
  &lt;servlet-mapping&gt;
    &lt;servlet-name&gt;xxx&lt;/servlet-name&gt;
    &lt;!-- 处理所有以.do结尾的请求 --&gt;
    &lt;url-pattern&gt;*.do&lt;/url-pattern&gt;
 &lt;/servlet-mapping&gt;
</code></pre>`,10)]))}const v=e(r,[["render",o]]);export{x as __pageData,v as default};
