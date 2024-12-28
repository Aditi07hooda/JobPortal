package com.aditi.jobportal.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PerformanceCheckAspect {

    private static final Logger LOG = LoggerFactory.getLogger(PerformanceCheckAspect.class);

    @Around("execution(* com.aditi.jobportal.Service.JobService.*(..))")
    public Object logAround(ProceedingJoinPoint pjp) throws Throwable {
        LOG.info("Method called: " + pjp.getSignature().toString());
        long start = System.currentTimeMillis();
        Object result = pjp.proceed();
        LOG.info("Method returned: " + pjp.getSignature().toString());
        long end = System.currentTimeMillis();
        LOG.info("Time taken: " + (end - start) + "ms");
        return result;
    }
}
