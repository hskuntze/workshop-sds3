package com.kuntzeprojects.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kuntzeprojects.dsvendas.dto.SellerDTO;
import com.kuntzeprojects.dsvendas.entities.Seller;
import com.kuntzeprojects.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repo;
	
	public List<SellerDTO> findAll(){
		List<Seller> res = repo.findAll();
		return res.stream().map(e -> new SellerDTO(e)).collect(Collectors.toList());
	}
}
