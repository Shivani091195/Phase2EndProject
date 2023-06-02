package StepDefinations;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/features",
		glue= "StepDefinations",
		plugin = {"pretty","html:target/html-cucumber","json:target/cucumber.json"},
		monochrome = true,
		tags = {"@Login or @Cart"}
		)

public class Runner {

}
