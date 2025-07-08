package com.feignz.modernize.model;

import java.time.LocalDate;
import java.util.Date;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity

public class transactions
{
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id_transactions", unique = true, nullable = false)
    String id_transactions;
    private String budget;
    private String amountSpent;
    private LocalDate transaction_date;
    private String description;
    public transactions() {}
}
