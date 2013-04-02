# Opt out of your Stanford student group fees in 2 simple steps!

If you're a student at Stanford, then by default you are billed almost 150$ every quarter to fund student groups. After digging in a little, I realized that Stanford gave over 100$ to groups that provided me no value whatsoever. Less than 40$ went to the groups that I was somehow interested in.  

Over 12 quarters, this amounts to over $1600, and a lot of students aren't aware of this. And if you do want to opt out, you'll have to create a fee waiver request. Then for every single student group you have to slide clunky sliders and toggle checkboxes. Wouldn't it make a lot more sense for students to have to opt in rather than opt out?

That's why I wrote a little script that will automatically opt out of each student fee. After running it you'll be able to opt in and fund the groups that bring you value.  All you have to do is create a new waiver request, and copy and paste some javascript into your browser's URL bar. 

# Instructions 

### 1. Request a Fee Waiver 

Head over to http://waivers.stanford.edu and click on "Request a Fee Waiver for Spring 2012-2013 »"

### 2. Run the script!

Copy the following **script**:

```
$.each($('[name*="value"]'), function(index, elem) {
  $(elem).attr('checked', true);
});
$.each($('[id*="amount"]'), function(index, elem) {
  elem.value = $(elem).parent().parent().children('th:nth-child(2)').text().substring(1);
});
```

Then go back to the fee waiver request and clear your browser's URL bar.

Then type into the URL bar:

```
javascript:
```

As soon as you finish typing ```javascript:``` paste the script in the URL bar, and press ```enter```

This will waive the entire fee for every group, as well check one of the reasons. Don't worry if the sliders are still positioned to the left, it does not matter. 

If something went wrong, reread the instructions. If it still fails, you probably need a better browser, try Safary or Chrome.

# Fund the student groups that matter to you

I recommend that you take a look at each group and make a concious decision as to whether you should give them money or not. You shouldn't abuse this and keep all the monies for yourself. Some groups don't waste their money on stupid events and pizza, and actually need that money to run.


