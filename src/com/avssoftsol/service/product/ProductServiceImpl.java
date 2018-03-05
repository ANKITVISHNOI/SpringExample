package com.avssoftsol.service.product;

import java.util.List;

import com.avssoftsol.dao.product.ProductDao;
import com.avssoftsol.dao.product.ProductDaoImpl;
import com.avssoftsol.entity.product.Product;

public class ProductServiceImpl implements ProductService{
	
	private ProductDao productDao = new ProductDaoImpl();
	
	@Override
	public void saveProduct(Product product) {
		productDao.saveProduct(product); 
	}

	@Override
	public List<Product> getProductList() {
		List<Product> productList = productDao.getProductList();
		return productList;
	}

	@Override
	public Product getProductById(Long id) {
		Product product = productDao.getProductById(id);
		return product;
	}

	@Override
	public void updateProduct(Product productUpdate) {
		Product productOld = productDao.getProductById(productUpdate.getId());
		if (productUpdate != null) {
			productOld.setCode(productUpdate.getCode());
			productOld.setName(productUpdate.getName());
			productOld.setPrice(productUpdate.getPrice());
			productOld.setQty(productUpdate.getQty());
			
			productDao.updateProduct(productOld);
		}
		
	}

	@Override
	public void deleteProduct(Long id) {
		productDao.deleteProduct(id);
	}

	
	
	public ProductDao getProductDao() {
		return productDao;
	}

	public void setProductDao(ProductDao productDao) {
		this.productDao = productDao;
	}
}
