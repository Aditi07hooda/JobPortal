package com.aditi.jobportal.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LogAspect {

    private static Logger LOG = LoggerFactory.getLogger(LogAspect.class);

    @Before("execution(* com.aditi.jobportal.Service.JobService.*(..))")
    public void log(JoinPoint jp) {
        LOG.info("Method called: " + jp.getSignature().toString() + " " +
                jp.getThis());
    }

    @After("execution(* com.aditi.jobportal.Service.JobService.*(..))")
    public void logAfter(JoinPoint jp) {
        LOG.info("Method called: " + jp.getSignature().toString());
    }
}
