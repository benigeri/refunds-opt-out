# Opt out of your Stanford student group fees in 2 simple steps!

If you're a student at Stanford, then by default you are billed almost 150$ every quarter to fund student groups. After digging in a little, I realized that Stanford gave over 100$ to groups that provided me no value whatsoever. Less than 40$ went to the groups that I was somehow interested in.  

Over 12 quarters, this amounts to over $1600, and a lot of students aren't aware of this. And if you do want to opt out, you'll have to head to http://waivers.stanford.edu and manually toggle and slide clunky sliders for every single group. I personally think it would make a lot more sense for students to have to opt in rather than opt out. 

That's why I wrote a little script that will automatically opt out of each student fee, to turn this into as much of an opt in process as I could. All you have to do is create a new waiver request, and copy and paste some javascript into your browser's URL bar. 

# Instructions 

### 1. Request a Fee Waiver 

Head over to http://waivers.stanford.edu and click on "Request a Fee Waiver for Spring 2012-2013 »"

### 2. Run the script!

First of all copy and paste the following **script**:

```
$.each($('[name*="value"]'), function(index, elem) {
  $(elem).attr('checked', true);
});
$.each($('[id*="amount"]'), function(index, elem) {
  elem.value = $(elem).parent().parent().children('th:nth-child(2)').text().substring(1);
});
```

Then clear your browser's URL bar, and type

```
javascript:
```

As soon as you finish typing ```javascript:``` paste the script in the URL bar, and press ```enter```

This will set all of the waivers to their maximum value and pick a reason for you. Don't worry if the sliders are still positioned to the left, it does not matter. 

If something went wrong, reread the instructions, and if you aren't using Chrome or Safari then get a better browser. 

# Fund the student groups that matter to you

Now I recommend that you take a look at the list of groups, and fund the groups that you are interested in. You shouldn't abuse this and keep all the monies for you, remember that some of these groups do have a positive impact on campus and you should at least consider funding each one. 


