package me.jonasjones.mcwebserver.web.defaults;

import java.io.*;

public class CreateDefaults {
    static String runFolder = "webserver";
    public static void createDefaults() {
        if (new File(runFolder + "/index.html").exists()) {
            System.out.println("File exists.");
        } else {
            System.out.println("File does not exist.");
            copyFile("index.html", runFolder);
            copyFile("index.css", runFolder);
            copyFile("index.js", runFolder);
        }
    }

    private static void copyFile(String resourceName, String destinationFolder) {
        try {
            // Open input stream to read from the resource file
            InputStream inputStream = CreateDefaults.class.getClassLoader().getResourceAsStream(resourceName);
            if (inputStream == null) {
                throw new FileNotFoundException("Resource not found: " + resourceName);
            }

            // Create output stream to write to the destination folder
            File destinationFile = new File(destinationFolder, resourceName);
            OutputStream outputStream = new FileOutputStream(destinationFile);

            // Copy the file byte by byte
            byte[] buffer = new byte[1024];
            int length;
            while ((length = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, length);
            }

            // Close streams
            inputStream.close();
            outputStream.close();

            System.out.println("File copied successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
