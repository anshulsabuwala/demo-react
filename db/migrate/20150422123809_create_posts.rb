class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.boolean :published
      t.string :published_by

      t.timestamps null: false
    end
  end
end
