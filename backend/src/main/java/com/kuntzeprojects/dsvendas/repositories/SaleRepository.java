package com.kuntzeprojects.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kuntzeprojects.dsvendas.dto.SaleSuccessDTO;
import com.kuntzeprojects.dsvendas.dto.SaleSumDTO;
import com.kuntzeprojects.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	/*
	 * Consulta personalizada do JPA utilizando JPQL (linguagem SQL orientada à objetos Java)
	 *  -> "obj" apelido das Sales, acessa o atributo "seller" (mesmo atributo da classe)
	 *  
	 *  "SELECIONE novos objetos do tipo '{path-classe-com-pacote}' (obj.seller, SOMANDO(obj.amount))
	 *  	VINDO {classe} COMO {apelido} AGRUPANDO POR obj.seller"
	 */
	@Query("SELECT new com.kuntzeprojects.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.kuntzeprojects.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
