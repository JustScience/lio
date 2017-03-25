class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :role
      t.string :client
      t.date :date
      t.string :link
      t.text :description
      t.string :catergory
      t.string :hero_1
      t.string :hero_2
      t.string :hero_3

      t.timestamps
    end
  end
end
