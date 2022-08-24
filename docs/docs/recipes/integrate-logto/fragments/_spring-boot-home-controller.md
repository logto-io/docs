```java
// path/to/project/src/main/java/io/logto/springboot/sample/controller/HomeController.java
package io.logto.springboot.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }
}
```
