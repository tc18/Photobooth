package com.example.helloworld.repositories;

import com.example.helloworld.models.Image1;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image1, Long> {
    // Custom queries (if needed)
}
