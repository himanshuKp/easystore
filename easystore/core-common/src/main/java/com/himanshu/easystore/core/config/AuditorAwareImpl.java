package com.himanshu.easystore.core.config;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component("auditorAwareImpl")
public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        // Since we don't have Spring Security integrated yet, we return a default user.
        // In a real application, this would fetch the user from SecurityContextHolder.
        return Optional.of("system");
    }
}
