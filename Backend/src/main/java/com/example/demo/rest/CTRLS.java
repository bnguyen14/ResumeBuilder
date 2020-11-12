package com.example.demo.rest;

import com.example.demo.dao.DAO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class CTRLS {
    private final DAO dao;
    public CTRLS(DAO dao){this.dao=dao;}
}
