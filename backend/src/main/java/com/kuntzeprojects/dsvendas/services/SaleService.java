package com.kuntzeprojects.dsvendas.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kuntzeprojects.dsvendas.dto.SaleDTO;
import com.kuntzeprojects.dsvendas.dto.SaleSuccessDTO;
import com.kuntzeprojects.dsvendas.dto.SaleSumDTO;
import com.kuntzeprojects.dsvendas.entities.Sale;
import com.kuntzeprojects.dsvendas.repositories.SaleRepository;
import com.kuntzeprojects.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repo;
	
	@Autowired
	private SellerRepository sellerRepo;
	
	/**
	 * 		Adicionando a classe  na busca do B.D. (findAll)
	 * automaticamente habilitamos a paginação (10 em 10, 20 em 20 etc.) 
	 * 					nos resultados do objeto
	 */
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		/**
		 * Criamos esta consulta de Sellers para que fique armazenado na memória
		 * cache, não necessitando da consulta feita automaticamente pelo JPA ao
		 * 					retornar o Seller de cada venda
		 */
		sellerRepo.findAll(); 
		Page<Sale> res = repo.findAll(pageable);
		return res.map(e -> new SaleDTO(e));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repo.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return repo.successGroupedBySeller();
	}
}
