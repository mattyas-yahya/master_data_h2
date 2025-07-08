

package com.feignz.modernize.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import  com.feignz.modernize.model.transactions;

public interface repo_transaction extends JpaRepository<transactions,String>
{
    String Q="SELECT DISTINCT a.category,ANY_VALUE(a.amount) AS amount, SUM(b.amount_spent) AS total_spent,(ANY_VALUE(a.amount) - SUM(b.amount_spent)) AS varian FROM budgets a JOIN transactions b ON a.category = b.budget GROUP BY a.category ORDER BY a.category";
    @Query(value = Q,nativeQuery = true)
    List findByVariance();
}