package com.devsuperior.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)//para não fazer lock de write no banco
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepository.findAll();//para não consultar a tabela seller várias vezes
		Page<Sale> result = repository.findAll(pageable);
		return result.map(entity -> new SaleDTO(entity));
	}
	
	@Transactional(readOnly = true)//para não fazer lock de write no banco
	public List<SaleSumDTO> amountGroupBySeller(){
		return repository.amountGroupBySeller();
	}

	@Transactional(readOnly = true)//para não fazer lock de write no banco
	public List<SaleSuccessDTO> successGroupBySeller(){
		return repository.successGroupBySeller();
	}

}
