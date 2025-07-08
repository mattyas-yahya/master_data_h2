package com.feignz.modernize.controllers.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.feignz.modernize.model.transactions;
import com.feignz.modernize.repo.repo_transaction;

@RequestMapping("/transaction")
@RestController

public class control_transaction_rest
{
    @Autowired
    repo_transaction ops;

    @RequestMapping(path="/All", method= RequestMethod.GET)
    public List<transactions> getTrx()
    {
        return this.ops.findAll();
    }

   

      @PostMapping("/save")
  @ResponseBody()
  public void Save(@Validated transactions dl)
  {
    ops.save(dl);
  }

  @RequestMapping(path="/variance", method= RequestMethod.GET)
  public List getVar()
  {
      return ops.findByVariance();
  }


}

