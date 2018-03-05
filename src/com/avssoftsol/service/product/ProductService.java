package com.avssoftsol.service.product;

import java.util.List;

import com.avssoftsol.entity.product.Product;

public interface ProductService {

	public void saveProduct(Product product); 

	public List<Product> getProductList();

	public Product getProductById(Long id);

	public void updateProduct(Product productUpdate);

	public void deleteProduct(Long id);  

}
