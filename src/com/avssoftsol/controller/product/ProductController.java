package com.avssoftsol.controller.product;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.avssoftsol.entity.product.Product;
import com.avssoftsol.service.product.ProductService;
import com.avssoftsol.service.product.ProductServiceImpl;

@Controller
public class ProductController {

	private ProductService productService = new ProductServiceImpl();

	@RequestMapping(value="/addProductForm")
	@ResponseBody
	public ModelAndView add(){
		ModelAndView modelAndView = new ModelAndView("addProduct");
		Product product = new Product();
		modelAndView.addObject("product", product);
		return modelAndView;

	}

	@RequestMapping(value="/saveProduct", method=RequestMethod.POST)
	public ModelAndView saveProduct(@ModelAttribute("product") Product product){

		if (product != null) {
			productService.saveProduct(product);
		}
		return new ModelAndView("redirect:/listProduct");

	}

	@RequestMapping(value="/listProduct")
	public ModelAndView getProductList(){
		List<Product> productList = productService.getProductList();
		ModelAndView modelAndView = new ModelAndView("listProduct");
		modelAndView.addObject("productList", productList);
		return modelAndView;

	}

	@RequestMapping(value="/editProduct")
	public ModelAndView editProduct(@RequestParam(value="id", required=true) Long id){
		Product product= null;
		if (id != null) {
			product = productService.getProductById(id);
		}
		ModelAndView modelAndView = new ModelAndView("editProduct");
		modelAndView.addObject("product", product);
		return modelAndView;

	}

	@RequestMapping(value="/updateProduct")
	public ModelAndView updateProduct(@ModelAttribute("product") Product productUpdate){
		
		if (productUpdate != null ) {
			productService.updateProduct(productUpdate);
		}

		return new ModelAndView("redirect:/listProduct");

	}

	@RequestMapping(value="/deleteProduct")
	public ModelAndView deleteProduct(@RequestParam(value="id", required=true) Long id){
		if (id != null) {
			productService.deleteProduct(id);
		}
		/*ModelAndView modelAndView = new ModelAndView("listProduct");
		List<Product> productList = productService.getProductList();
		modelAndView.addObject("productList", productList);*/
		return new ModelAndView("redirect:/listProduct");

	}

	
	
	public ProductService getProductService() {
		return productService;
	}

	public void setProductService(ProductService productService) {
		this.productService = productService;
	}

}
