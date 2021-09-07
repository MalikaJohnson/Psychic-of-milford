# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Testimonial.destroy_all
Admin.destroy_all

# instances of User Class 

@Admin = Admin.create!(username: "Grace", email:"grace@email.com", password:"grace.ofmilford")

puts "#{Admin.count} admin created"

# instances of Testimonial class 

@testimonial1 = Testimonial.create!(name:"Rebecca Huber", content: "I had a tarot card reading this evening that was absolutely wonderful. I would definitely recommend/come back again. She was kind and very reassuring as well as accurate in her readings. Already looking forward to my next visit!")
@testimonial2 = Testimonial.create!(name:"Alex Brown", content: "Very accurate and spot on about certain things that only I would know. Will be going back for another reading soon in 2020.")
@testimonial3 = Testimonial.create!(name:"Nicole Ruggeri", content: "This was a great reading! Got my cards read and was very satisfied with the time spent. Highly recommend!")
@testimonial4 = Testimonial.create!(name:"Vee C", content: "Positive: Professionalism, Responsiveness, Value")

puts "#{Testimonial.count} testimonials created"