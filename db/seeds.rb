# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Testimonial.destroy_all
User.destroy_all

# instances of User Class 

Admin = User.create!(username: "Grace", email:"grace@email.com", password:"grace.ofmilford")

puts "#{User.count} users created"

# instances of Testimonial class 

@testimonial1 = Testimonial.create!()
@testimonial2
@testimonial3
@testimonial3
