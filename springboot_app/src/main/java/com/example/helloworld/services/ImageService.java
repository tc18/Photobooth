package com.example.helloworld.services;

import com.example.helloworld.models.Image1;
import com.example.helloworld.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ImageService {

    private final String UPLOAD_DIR = "uploads/";

    @Autowired
    private ImageRepository imageRepository;

    public Image1 uploadImage(MultipartFile file) throws IOException {
        String imageName = file.getOriginalFilename();
        Path filePath = Paths.get(UPLOAD_DIR + imageName);
        Files.createDirectories(filePath.getParent()); // Create directories if they do not exist
        Files.write(filePath, file.getBytes());

        String imageUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/uploads/")
                .path(imageName)
                .toUriString();

        Image1 image = new Image1();
        image.setImageName(imageName);
        image.setImageUrl(imageUrl);

        return imageRepository.save(image);
    }
}
