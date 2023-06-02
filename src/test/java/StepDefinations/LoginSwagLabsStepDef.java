package StepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginSwagLabsStepDef {
	
WebDriver driver = Hooks.driver;

@Given("User has launched the application")
public void user_has_launched_the_application() throws InterruptedException {
    
	driver.get("https://www.saucedemo.com/");
	Thread.sleep(2000);
}

@When("user enter username as {string}")
public void user_enter_username_as(String UsernameVal) {
	WebElement username = driver.findElement(By.id("user-name"));
	   username.sendKeys(UsernameVal);
}

@When("user enter password as {string}")
public void user_enter_password_as(String PasswordVal) {
	WebElement password = driver.findElement(By.id("password"));
	password.sendKeys(PasswordVal);
}

@When("user click on Login button")
public void user_click_on_Login_button() {
	WebElement btn_login = driver.findElement(By.name("login-button"));
	 btn_login.click();
}

@Then("user should be able to login successfully")
public void user_should_be_able_to_login_successfully() throws InterruptedException {
    Thread.sleep(3000);
}

@Then("user should get error as {string}")
public void user_should_get_error_as(String ExpError) {
	WebElement Error = driver.findElement(By.xpath("//h3[@data-test='error']"));
	String ActError = Error.getText();
	Assert.assertEquals(ActError,ExpError);
}
}
