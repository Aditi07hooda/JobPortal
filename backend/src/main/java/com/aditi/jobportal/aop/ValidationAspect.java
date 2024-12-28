package com.aditi.jobportal.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ValidationAspect {

    private static Logger LOG = LoggerFactory.getLogger(ValidationAspect.class);

    @Around("execution(* com.aditi.jobportal.Service.JobService.*(..)) && args(id)")
    public Object validateAndUpdate(ProceedingJoinPoint pjp, int id) throws Throwable {
        LOG.info("id is " + id);
        if (id < 0) {
            LOG.info("Invalid id less than 0");
            id = -id;
            LOG.info("id updated to " + id);
        }
        Object result = pjp.proceed(new Object[] { id });
        LOG.info("Method returned: " + pjp.getSignature().toString());
        return result;
    }
}
