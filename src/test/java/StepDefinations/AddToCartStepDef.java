package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCartStepDef {
	
	WebDriver driver = Hooks.driver;
	
	@Given("User has launched the application and logged in successfully")
	public void user_has_launched_the_application_and_logged_in_successfully() throws InterruptedException {
		driver.get("https://www.saucedemo.com/");
		WebElement username = driver.findElement(By.id("user-name"));
		   username.sendKeys("standard_user");
		WebElement password = driver.findElement(By.id("password"));
			password.sendKeys("secret_sauce");
		WebElement btn_login = driver.findElement(By.name("login-button"));
			 btn_login.click();
			 Thread.sleep(3000);
	}

	@When("User clicks on Add to cart button")
	public void user_clicks_on_Add_to_cart_button() {
		WebElement addtocart_btn = driver.findElement(By.id("add-to-cart-sauce-labs-backpack"));
		addtocart_btn.click();
	}

	@And("User goes to cart")
	public void user_goes_to_cart() throws InterruptedException {
	   WebElement cart = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
	   cart.click();
	   Thread.sleep(1000);
	}

	@Then("The product should be present in cart")
	public void the_product_should_be_present_in_cart() throws InterruptedException {
	   WebElement Product = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
	   String productName = Product.getText();
	   Assert.assertEquals(productName,"Sauce Labs Backpack");
	   Thread.sleep(2000);
	}

}
